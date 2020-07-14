import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@apw-demo/navbar",
  () => System.import("@apw-demo/navbar"),
  isActive.navbar
);

registerApplication({
  name: "@apw-demo/employees",
  app: () => System.import("@apw-demo/employees"),
  activeWhen: (location) => location.pathname === "/employees"
});

registerApplication({
  name: "@apw-demo/employee-details",
  app: () => System.import("@apw-demo/employee-details"),
  activeWhen: isActive.employeeDetails
});

registerApplication({
  name: "@apw-demo/vue-app",
  app: () => System.import("@apw-demo/vue-app"),
  activeWhen: (location) => location.pathname === "/"
});

registerApplication({
  name: "@apw-demo/sobral",
  app: () => System.import("@apw-demo/sobral"),
  activeWhen: (location) => location.pathname === "/sobral"
});




start();
