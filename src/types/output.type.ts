export type Video = {
  storyId: string
  hdUrl: string
  sdUrl: string
}

export type Photo = {
  storyId: string
  image: string
}

export type Output = Video[] | Photo[] | []
