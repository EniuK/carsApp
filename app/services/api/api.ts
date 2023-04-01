/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import {
  ApiResponse, // @demo remove-current-line
  ApisauceInstance,
  create,
} from "apisauce"
import Config from "../../config"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem" // @demo remove-current-line
import type {
  ApiConfig,
  ApiFeedResponse, // @demo remove-current-line
} from "./api.types"
import type { EpisodeSnapshotIn } from "../../models/Episode" // @demo remove-current-line
import { CollectionDb, CollectionWithElements, ElementToAdd } from "../../types/types"
import User from "../../screens/context/User"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  // @demo remove-block-start
  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async getEpisodes(): Promise<{ kind: "ok"; episodes: EpisodeSnapshotIn[] } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<ApiFeedResponse> = await this.apisauce.get(
      `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`,
    )

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawData = response.data

      // This is where we transform the data into the shape we expect for our MST model.
      const episodes: EpisodeSnapshotIn[] = rawData.items.map((raw) => ({
        ...raw,
      }))

      return { kind: "ok", episodes }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
  // @demo remove-block-end

  async getUserElements(
    userId: string,
  ): Promise<{ kind: "ok"; userElements: CollectionWithElements[] } | GeneralApiProblem> {
    const response = await this.apisauce.get(`/userElements/${userId}`)

    const rawData = response.data

    return {
      kind: "ok",
      userElements: rawData as CollectionWithElements[],
    }
  }

  async getAllUserElements(
    // nazewnictwo do zmiany
    userId: string,
  ): Promise<{ kind: "ok"; userElements: [] } | GeneralApiProblem> {
    const response = await this.apisauce.get(`/getAllUserElements/${userId}`)

    const rawData = response.data

    return {
      kind: "ok",
      userElements: rawData as [],
    }
  }

  async getUser(userId: string): Promise<
    | {
        kind: "ok"
        user: User
      }
    | GeneralApiProblem
  > {
    const response = await this.apisauce.get(`/users/${userId}`)

    const rawData = response.data

    return {
      kind: "ok",
      user: rawData as User,
    }
  }

  async addElement(
    element: ElementToAdd,
    id: string,
  ): Promise<
    | {
        kind: "ok"
        element: ElementToAdd
      }
    | GeneralApiProblem
  > {
    const el = {
      ...element,
    }

    const response = await this.apisauce.post(
      `/elements`,
      { ...el },
      {
        headers: {
          owneruserid: id,
        },
      },
    )

    const rawData = response.data

    return {
      kind: "ok",
      element: rawData as ElementToAdd,
    }
  }

  async getFeaturedCollections(): Promise<
    | {
        kind: "ok"
        featuredCollections: CollectionDb[]
      }
    | GeneralApiProblem
  > {
    const response = await this.apisauce.get("/collections/featured")

    const rawData = response.data

    return {
      kind: "ok",
      featuredCollections: rawData as CollectionDb[],
    }
  }

  async getFeaturedCollectionElements(collectionId: string): Promise<
    | {
        kind: "ok"
        collectionElements: any
      }
    | GeneralApiProblem
  > {
    const response = await this.apisauce.get(`/collections/${collectionId}/elements`)
    const rawData = response.data
    // do poprawienia i dodania typ
    return {
      kind: "ok",
      collectionElements: rawData as any,
    }
  }

  async addUser(user: ElementToAdd): Promise<
    | {
        kind: "ok"
        user: User
      }
    | GeneralApiProblem
  > {
    const response = await this.apisauce.post(`/users`, { ...user })

    const rawData = response.data

    return {
      kind: "ok",
      user: rawData as User,
    }
  }

  async getArticles(): Promise<
    | {
        kind: "ok"
        articles: any
      }
    | GeneralApiProblem
  > {
    const response = await this.apisauce.get(`/articles`)
    const rawData = response.data
    // do poprawienia i dodania typ
    return {
      kind: "ok",
      articles: rawData as any,
    }
  }

  //   async getFeaturedCollections(): Promise<
  //   | {
  //       kind: "ok"
  //       featuredCollections: CollectionDb[]
  //     }
  //   | GeneralApiProblem
  // > {
  //   const response = await this.apisauce.get("/collections/featured")

  //   const rawData = response.data

  //   return {
  //     kind: "ok",
  //     featuredCollections: rawData as CollectionDb[],
  //   }
  // }
}

// Singleton instance of the API for convenience
export const api = new Api({
  url: "http://localhost:3000",
  timeout: 5000,
})
