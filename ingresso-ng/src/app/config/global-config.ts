export const api = {
    host: 'http://localhost',
    port: '5002',
    path: function() {
        return this.host + ':' + this.port
    }
}