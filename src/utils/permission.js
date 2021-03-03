export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    // const roles = store.getters && store.getters.roles;
    const roles = JSON.parse(localStorage.getItem("authority")) || [];
    const permissionRoles = value;

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role);
    });
    return hasPermission;
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`);
    return false;
  }
}
