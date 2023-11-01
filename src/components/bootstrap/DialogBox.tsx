import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import {DialogBoxWrappper} from "./dialogBoxStyle"

const DialogBox = ({ open, onClose, onConfirm }:any) => {
  return (
<DialogBoxWrappper>
    {/* <div className='dialogBox'> */}
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>Are you sure want to cancel the Order ?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button onClick={onConfirm} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
    {/* </div> */}
    </DialogBoxWrappper>
  );
};

export default DialogBox;
