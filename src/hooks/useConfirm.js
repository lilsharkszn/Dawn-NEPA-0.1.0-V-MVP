import React, { useCallback, useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';

export default function useConfirm() {
  const [opts, setOpts] = useState(null);

  const confirm = useCallback(({ title = 'Confirm', message = 'Are you sure?' } = {}) => {
    return new Promise((resolve) => {
      setOpts({ title, message, resolve });
    });
  }, []);

  const handleConfirm = () => {
    if (!opts) return;
    opts.resolve(true);
    setOpts(null);
  };

  const handleCancel = () => {
    if (!opts) return;
    opts.resolve(false);
    setOpts(null);
  };

  const ConfirmComponent = (
    <ConfirmModal
      open={Boolean(opts)}
      title={opts?.title}
      message={opts?.message}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );

  return { confirm, ConfirmComponent };
}
