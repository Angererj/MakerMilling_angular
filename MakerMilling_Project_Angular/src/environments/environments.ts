export const environment = {
  production: false,
  baseUrl: "https://thingworx.grandgarage.eu:8443/Thingworx/Things/",
  appKey: 'b808ec2f-d9df-4671-adb6-a17c88943440',
  userUrl: "https://thingworx.grandgarage.eu:8443/Thingworx/Users/",
  imageUrl: "https://thingworx.grandgarage.eu:8443/Thingworx/MediaEntities/",
  toolInSpindleImageEntity: "JA_SE.MakerMillingToolInSpindleImage.Media",
  programPreviewImageEntity: "JA_SE.MakerMillingActiveProgramImage.Media",
  liveCameraImageEntity: "JA_SE.MakerMillingLiveCameraFeedImage.Media",
  userIsAuthenticated: false
};

//change user is authenticated to passed boolean value
export function setUserAuthenticated(isAuthenticated: boolean): void {
  environment.userIsAuthenticated = isAuthenticated;
}
