export const api = {
    host: 'localhost',
    port: '5002',
    path: function() {
        return this.host + ':' + this.port
    }
}