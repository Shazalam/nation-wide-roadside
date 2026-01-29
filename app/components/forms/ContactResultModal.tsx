import { Modal } from "../common/Modal";
import { CheckCircle, XCircle } from "lucide-react";

type Props = {
  open: boolean;
  success: boolean;
  message: string;
  onClose: () => void;
};

export function ContactResultModal({
  open,
  success,
  message,
  onClose,
}: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="text-center">
        {success ? (
          <CheckCircle className="mx-auto h-14 w-14 text-emerald-500" />
        ) : (
          <XCircle className="mx-auto h-14 w-14 text-red-500" />
        )}

        <h2 className="mt-4 text-xl font-semibold text-slate-900">
          {success ? "Request Submitted!" : "Something went wrong"}
        </h2>

        <p className="mt-2 text-sm text-slate-600">{message}</p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
