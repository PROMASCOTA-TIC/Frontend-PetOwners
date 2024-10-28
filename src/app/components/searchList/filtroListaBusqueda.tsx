"use client";
import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, Slider, SelectChangeEvent, styled, SliderThumb, Tooltip } from "@mui/material";
import PropTypes from 'prop-types';

// function valuetext(value: number) {
//     return `$ ${value}`;
// }

interface ValueLabelComponentProps {
    children: React.ReactElement;
    value: number;
}

function ValueLabelComponent(props: ValueLabelComponentProps) {
    const { children, value } = props;
    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

const CustomAirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#46DA6933',
    height: 8,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: '#00404099',
        opacity: 1,
        height: 3,
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#3a8589',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&::before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

export const FiltroListaBusqueda = () => {
    const [value, setValue] = useState([0, 80]);
    const [orden, setOrden] = useState<string>('');

    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     if (Array.isArray(newValue)) {
    //         setValue(newValue);
    //     }
    // };

    const handleDeliveryChange = (event: SelectChangeEvent<string>) => {
        setOrden(event.target.value);
    };

    return (
        <div className="flex gap-e63">
            <div>
                <h2 className="text-[24px] text-terciary mb-e8">Precio:</h2>
                <Box sx={{ width: 300 }}>
                    {/* <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="secondary"
                    /> */}

                    <CustomAirbnbSlider
                        valueLabelDisplay="auto"
                        components={{
                            Thumb: AirbnbThumbComponent,
                            ValueLabel: ValueLabelComponent,
                        }}
                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                        defaultValue={[20, 40]}
                    />
                </Box>
            </div>
            <div>
                <h2 className="text-[24px] text-terciary mb-e8">Orden</h2>
                <FormControl variant="outlined" size="small" sx={{ minWidth: 200, maxWidth: 275, borderRadius: '16px' }}>
                    {/* <InputLabel>Orden de vista</InputLabel> */}
                    <Select
                        value={orden}
                        onChange={handleDeliveryChange}
                        placeholder="Orden de vista"
                    // label="Orden de vista"
                    >
                        <MenuItem value="Opcion1">Opción 1</MenuItem>
                        <MenuItem value="Opcion2">Opción 2</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
