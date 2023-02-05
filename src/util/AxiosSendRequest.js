import axios from "axios";
// `https://docui-321516.ue.r.appspot.com`
export const AXIOS_ACTIONS = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  URL: `http://localhost:5000`,
  HEADERS: {
    "Content-Type": "application/json",
  },
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  START_JOB: "start_job",
  STOP_JOB: "stop_job",

  UPLOAD_DOC: "upload_doc",
  GOOGLE_CLIENT_ID:
    "1046727487005-m1obhsf9u8earvlrd8reamicfirq09id.apps.googleusercontent.com",
  DELETE_USER: "delete_user",
  APPS_ACTIONS: "app_Actions",
};

export const axiosSendRequest = async (type, url, sendData) => {
  let config = {};

  switch (type) {
    case AXIOS_ACTIONS.GET:
      config = {
        method: "get",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
      };
      break;

    case AXIOS_ACTIONS.POST:
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        headers: AXIOS_ACTIONS.HEADERS,
        data: JSON.stringify(sendData),
      };
      break;

    case AXIOS_ACTIONS.DELETE:
      let formDelete = new FormData();
      formDelete.append("user_id", sendData.user_id);
      formDelete.append("token", sendData.token);
      formDelete.append("name", sendData.name);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formDelete,
      };
      break;

    case AXIOS_ACTIONS.REGISTER:
      let formRegister = new FormData();
      formRegister.append("email", sendData.email);
      formRegister.append("password", sendData.password);
      formRegister.append("userrole", sendData.userRole);
      formRegister.append("usergroup", sendData.userGroup);
      formRegister.append("activeflag", sendData.activeFlag);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        headers: { ...formRegister.getHeaders() },
        data: formRegister,
      };
      break;

    case AXIOS_ACTIONS.LOGIN:
      let formLogin = new FormData();
      formLogin.append("email", sendData.email);
      formLogin.append("password", sendData.password);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formLogin,
      };
      break;

    case AXIOS_ACTIONS.LOGOUT:
      let formLogout = new FormData();
      formLogout.append("token", sendData.token);
      formLogout.append("email", sendData.email);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formLogout,
      };
      break;

    case AXIOS_ACTIONS.START_JOB:
      let formStartJob = new FormData();
      formStartJob.append("token", sendData.token);
      formStartJob.append("user_id", sendData.email);
      formStartJob.append("workflow_name", sendData.name);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formStartJob,
      };
      break;

    case AXIOS_ACTIONS.STOP_JOB:
      let formStopJob = new FormData();
      formStopJob.append("token", sendData.token);
      formStopJob.append("user_id", sendData.email);
      formStopJob.append("workflow_name", sendData.name);
      formStopJob.append("job_id", sendData.id);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formStopJob,
      };
      break;

    case AXIOS_ACTIONS.UPLOAD_DOC:
      const { type, name } = sendData.file;
      let formUploadDoc = new FormData();
      formUploadDoc.append("user_id", sendData.user_id);
      formUploadDoc.append("token", sendData.token);
      formUploadDoc.append("workflow_name", sendData.workFlowName);
      formUploadDoc.append("job_id", sendData.jobSelected);
      formUploadDoc.append("content_type", type);
      formUploadDoc.append("file", sendData.file);
      formUploadDoc.append("source_file_path", name);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formUploadDoc,
      };
      break;

    case AXIOS_ACTIONS.DELETE_USER:
      let formUserDelete = new FormData();
      formUserDelete.append("user_id", sendData.user_id);
      formUserDelete.append("token", sendData.token);
      formUserDelete.append("username", sendData.username);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formUserDelete,
      };
      break;

    case AXIOS_ACTIONS.APPS_ACTIONS:
      let formAppAdd = new FormData();
      formAppAdd.append("user_id", sendData.user_id);
      formAppAdd.append("token", sendData.token);
      formAppAdd.append("app_name", sendData.app_name);
      config = {
        method: "post",
        url: `${AXIOS_ACTIONS.URL}/${url}`,
        data: formAppAdd,
      };
      break;

    default:
      return null;
  }

  const { data } = await axios(config).catch((e) => console.error(e));

  return data;
};

export const REFERENCE_ENTITY = {
  synonyms: [],
  category: "Invoice",
  min_length: 1,
  max_length: 1000,
  data_type: "Booloean",
};
