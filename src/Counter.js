import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div>
      <IconButton aria-label="like-btn" onClick={() => setLike(like + 1)} color="primary" >
      <Badge badgeContent={like} color="primary">👍
    </Badge>
      </IconButton>
      <IconButton aria-label="like-btn" onClick={() => setDisLike(disLike + 1)} color="primary" >
      <Badge badgeContent={disLike} color="error">👎
    </Badge>
      </IconButton>

    </div>
  );
}
