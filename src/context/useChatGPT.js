import { useQuery } from "react-query";
import { axiosSendRequest, AXIOS_ACTIONS } from "../util/AxiosSendRequest";

export const useChatGPT = (prompt) => {
  const { data: chatGPTData, refetch: chatGPTRefetch } = useQuery(
    [`chatGPT ${prompt}`],
    async () => {
      return axiosSendRequest(AXIOS_ACTIONS.POST, `chatGPT`, { prompt });
    },
    {
      enabled: prompt !== "",
    }
  );

  return { chatGPTData, chatGPTRefetch };
};
