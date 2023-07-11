export default class Endpoint {
    constructor(name) {
        this.name = name
        this.inMap = false
        this.latlng = {}
    }

    setCoord(latlng) {
        this.latlng = latlng
    }

    clear() {
        this.inMap = false
        this.coord = []
    }

    getLatLng() {
        return this.latlng
    }
}