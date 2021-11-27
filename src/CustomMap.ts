// Instructions to every other class to be able to use addMarker
// exporting this makes it accessable on other classes
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
    name: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: { lat: 0, lng: 0 },
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
            icon: {
                scaledSize: new google.maps.Size(25, 25),
                url: 'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/logo.png',
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
