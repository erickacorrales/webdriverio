import request from 'request'
import { remote } from '../../../src'

describe('pause test', () => {
    it('should pause with provided timeout', async () => {
        const browser = await remote({
            baseUrl: 'http://foobar.com',
            capabilities: {
                browserName: 'foobar'
            }
        })

        const start = Date.now()
        await browser.pause(500)
        expect((Date.now() - start) > 490).toBe(true)
        expect(request.mock.calls).toHaveLength(1)
    })

    it('should pause by 1s per default', async () => {
        const browser = await remote({
            baseUrl: 'http://foobar.com',
            capabilities: {
                browserName: 'foobar'
            }
        })

        const start = Date.now()
        await browser.pause()
        expect((Date.now() - start) > 990).toBe(true)
        expect(request.mock.calls).toHaveLength(1)
    })

    afterEach (() => {
        request.mockClear()
    })
})
