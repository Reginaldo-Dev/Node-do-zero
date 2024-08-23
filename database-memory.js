import { randomUUID} from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return this.#videos.values()
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    updade(id, video) {
        this.#videos.push(video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}