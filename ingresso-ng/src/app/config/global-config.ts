export const api = {
    host: 'localhost',
    port: '4200',
    path: function() {
        return this.host + ':' + this.port
    }
}