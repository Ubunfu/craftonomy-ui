import axios from "axios";

async function getToken(authCode) {
    const grantType = 'authorization_code'
    const clientId = process.env.VUE_APP_CLIENT_ID
    const redirectUri = process.env.VUE_APP_REDIRECT_URI
    const OAUTH_REQ_PAYLOAD = `grant_type=${grantType}&client_id=${clientId}&code=${authCode}&redirect_uri=${redirectUri}`
    let resp
    try {
        resp = (await axios.post(process.env.VUE_APP_TOKEN_URL, OAUTH_REQ_PAYLOAD, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }))
        return resp.data
    } catch (error) {
        console.log(`Error getting token: ${JSON.stringify(error)}`)
        throw error
    }
}

function isAuthenticated(cookie) {
    if (null == cookie) {
        console.error('Error: Not authenticated')
        return false
    }
    if (!cookie.accessToken || !cookie.idToken) {
        console.error('Error: Missing tokens')
        return false
    }
    return true
}

export {
    getToken,
    isAuthenticated
}