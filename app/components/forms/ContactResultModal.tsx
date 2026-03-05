import { Modal } from "../common/Modal";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";

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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="text-center p-2"
          >
            <div className="flex justify-center mb-6">
              {success ? (
                <div className="rounded-full bg-emerald-100 p-3 ring-8 ring-emerald-50">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
              ) : (
                <div className="rounded-full bg-red-100 p-3 ring-8 ring-red-50">
                  <XCircle className="h-10 w-10 text-red-600" />
                </div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {success ? "Dispatch Confirmed" : "Transmission Failed"}
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed max-w-sm mx-auto">
              {message}
            </p>

            <div className="mt-8">
              <Button
                onClick={onClose}
                fullWidth
                size="lg"
                variant={success ? "primary" : "secondary"}
                className="group"
              >
                {success ? "Got it, thanks" : "Try Again"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {success && (
              <p className="mt-4 text-xs text-slate-400 font-medium uppercase tracking-widest">
                Our team is standing by
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
