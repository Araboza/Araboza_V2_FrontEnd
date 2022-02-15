import { toast } from "react-toastify";

export const alert = (message: string) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    pauseOnHover: false,
    progress: undefined,
  });
