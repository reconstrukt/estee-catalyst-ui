import React from 'react';
import usStates from '@/cms/usStates';
import { Select, FormHelperText } from '@mui/material';

export default function StateSelect({ value, onChange, error, helperText }) {
    return (
        <>
            <Select
                native={true}
                error={error}
                fullWidth
                value={value}
                onChange={onChange}
            >
                <option value=""></option>
                {usStates.map((c, i) => (
                    <option key={i} value={c.value}>
                        {c.title}
                    </option>
                ))}
            </Select>
            {error && (
                <FormHelperText error sx={{ pl: 2 }}>
                    {helperText}
                </FormHelperText>
            )}
        </>
    );
}
