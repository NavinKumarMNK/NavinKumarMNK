import { UMAMI } from './instance'

import type { PageView } from 'megnav'

type GetPageViews = {
  isError: boolean
  data: number | null
}

/**
 * It takes an array of objects, and returns the sum of the values of the `pageviews` property of each
 * object
 * @param arr - Array<PageView> - the array of pageviews
 */
const reducePageViewsToNumber = (arr: Array<PageView>) => {
  return arr.reduce((acc, curVal) => {
    const newVal = acc.pageviews.value + curVal.pageviews.value

    acc.pageviews.value = newVal
    return acc
  }).pageviews.value
}

/**
 * It takes a slug, gets a token, then makes two requests to the Umami API, one for the article and one
 * for the post, and then merges the data and returns it
 * @param {string} slug - string - the slug of the article or post post
 * @returns An object with two properties: isError and data.
 */
export const getPageViews = async (slug: string, token: string): Promise<GetPageViews> => {
  const end_date = new Date()

  const config = { headers: { Authorization: `Bearer ${token}` } }

  const articleURL = `/api/website/1/stats?start_at=${1645722000000}&end_at=${end_date.getTime()}&url=/article/${slug}`
  const postURL = `/api/website/1/stats?start_at=${1645722000000}&end_at=${end_date.getTime()}&url=/post/${slug}`

  let responseArticle = {
    bounces: { change: 0, value: 0 },
    pageviews: { change: 0, value: 0 },
    totaltime: { change: 0, value: 0 },
    unique: { change: 0, value: 0 }
  } as PageView

  let responsePost = {
    bounces: { change: 0, value: 0 },
    pageviews: { change: 0, value: 0 },
    totaltime: { change: 0, value: 0 },
    unique: { change: 0, value: 0 }
  } as PageView

  /* Making two requests to the Umami API, one for the article and one for the post, and then merges the
 data and returns it */
  const res = await Promise.allSettled([UMAMI.get<PageView>(articleURL, config), UMAMI.get<PageView>(postURL, config)])

  /* Checking if the first request was successful, and if it was, it is assigning the data to the
  responseArticle variable. */
  if (res[0].status === 'fulfilled') {
    responseArticle = res[0].value.data
  }

  /* Checking if the second request was successful, and if it was, it is assigning the data to the
    responsePost variable. */
  if (res[1].status === 'fulfilled') {
    responsePost = res[1].value.data
  }

  /* Taking the two objects, responseArticle and responsePost, and putting them into an array, and then
  using the Object.values() method to return an array of the values of the objects. */
  const mergedResponseData = Object.values([responseArticle, responsePost])

  const data = reducePageViewsToNumber(mergedResponseData)

  return {
    isError: false,
    data
  }
}
