import { toast } from "react-toastify";

export const alert = (message: string) =>
  toast.error("id를 입력해주세요!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: false,
    progress: undefined,
  });
