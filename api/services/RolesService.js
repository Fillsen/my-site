import BaseApi from 'api/BaseApi';

export default class RolesService extends BaseApi {
  async getCreatorRoles({ page, page_size }) {
    const CREATOR_ROLES_URL = '/creator-roles';
    const params = {
      key: process.env.API_SECRET_KEY,
      page,
      page_size,
    };
    return this.api.$get(CREATOR_ROLES_URL, { params });
  }
}
