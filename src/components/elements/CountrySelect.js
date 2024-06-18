import React from 'react';
import countries from '@/cms/countries';
import { Select, FormHelperText } from '@mui/material';

export default function CountrySelect({ value, onChange, error, helperText }) {
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
                {countries.map((c, i) => (
                    <option key={i} value={c.name}>
                        {c.name}
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
