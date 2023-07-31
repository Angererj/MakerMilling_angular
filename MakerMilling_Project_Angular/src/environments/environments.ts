export const environment = {
  production: false,
  baseUrl: "https://thingworx.grandgarage.eu:8443/Thingworx/Things/",
  appKey: 'b808ec2f-d9df-4671-adb6-a17c88943440',
  userUrl: "https://thingworx.grandgarage.eu:8443/Thingworx/Users/",
  imageUrl: "https://thingworx.grandgarage.eu:8443/Thingworx/MediaEntities/",
  toolInSpindleImageEntity: "JA_SE.MakerMillingToolInSpindleImage.Media",
  programPreviewImageEntity: "JA_SE.MakerMillingActiveProgramImage.Media",
  liveCameraImageEntity: "JA_SE.MakerMillingLiveCameraFeedImage.Media",
  machineIpAdress: "http://10.3.0.128",
  machineVideoStream: 'http://10.3.0.128:44347/mjpg/video.mjpg',
  userIsAuthenticated: false
};

export function setUserAuthenticated(isAuthenticated: boolean): void {
  environment.userIsAuthenticated = isAuthenticated;
}
