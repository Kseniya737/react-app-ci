import { expect, test } from '@playwright/test'

test('updating part of user posts', async({request}) => {
    const response = await request.patch('/posts/1', {
        data: {
            title: 'Just an edited file Post'
        }
    })

    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    expect(await response.json()).toEqual(expect.objectContaining({
        "title": "Just an edited file Post"
    }))
})