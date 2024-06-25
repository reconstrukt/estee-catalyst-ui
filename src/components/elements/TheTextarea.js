import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';

export default function TheTextarea({
    sx,
    value,
    onChange,
    maxWords = 100,
    error,
    ...props
}) {
    const getNumOfWords = (val) => {
        if (!val) return 0;

        return val.split(' ').length;
    };

    const [wordCount, setWordCount] = useState(getNumOfWords(value));

    useEffect(() => {
        setWordCount(getNumOfWords(value));
    }, [value]);

    const handleChange = (e) => {
        let val = e.target.value;

        if (getNumOfWords(val) > maxWords) {
            return;
        }

        onChange(e);
    };

    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                ...sx,
            }}
        >
            <TextField
                fullWidth
                multiline
                rows={4}
                value={value}
                error={error}
                onChange={(e) => handleChange(e)}
                {...props}
                sx={{
                    '& .MuiInputBase-root': {
                        pt: 1,
                    },
                }}
                inputProps={{
                    sx: {
                        paddingBottom: '20px',
                    },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: error ? 26 : 5,
                    left: 14,
                }}
            >
                {wordCount} / {maxWords}
            </Box>
        </Box>
    );
}
