import { Output, Photo, Video } from '../types/output.type'

const VIDEO_KEY = 'unified_stories'

export const extractFbViewSource = (viewSource: string) => {
  const domParser = new DOMParser()
  const doc = domParser.parseFromString(viewSource, 'text/html')

  const scriptElements = Array.from(doc.querySelectorAll('script'))
  const contentScript = scriptElements.find((e) => e.innerText.includes(VIDEO_KEY))

  if (contentScript == null) return console.error('Content Script not found')
  const content = JSON.stringify(contentScript.innerText)

  const dashManifestRegex = /\\"dash_manifest.*?",/g
  const removedDashManifestContent = content.replace(dashManifestRegex, '')

  const drmInfoRegex = /\\"drm_info.*?",/g
  const removedDrmContent = removedDashManifestContent.replace(drmInfoRegex, '')
  const parsed = JSON.parse(JSON.parse(removedDrmContent))

  const storiesRegex = /unified_stories.*,"owner/g
  const matchText = JSON.stringify(parsed).match(storiesRegex)
  if (matchText == null) return console.error('stories object not found')

  const removedString = matchText[0].slice(26)
  const cleanedStories = removedString.slice(0, removedString.length - 8)
  const parsedContent = JSON.parse(cleanedStories)

  const storiesMeta = parsedContent.flatMap((story: any) => extractStoryDetails(story))
  return storiesMeta as Output
}

const extractStoryDetails = (storyMeta: any): Photo | Video | [] => {
  const story = storyMeta['node']['attachments'][0]['media']
  const type = story['__typename']
  const storyId = story['id']
  if (type !== 'Video' && type !== 'Photo') return []

  if (type === 'Photo') {
    const image = story['image']['uri']

    return {
      storyId,
      image
    }
  }

  const hdUrl = story['browser_native_hd_url']
  const sdUrl = story['browser_native_sd_url']

  return {
    storyId,
    hdUrl,
    sdUrl
  }
}
