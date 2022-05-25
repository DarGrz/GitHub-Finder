class GitHub {
    constructor() {
        this.client_id = '570dcb5716b84b0c54ec';
        this.client_secret = '4ef9511436c90fd14697186825c2a411c0c32da1';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}