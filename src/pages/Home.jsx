import { LoadingButton } from '@mui/lab'
import { Box, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Months from '../data/Months';
import ResultTypes from '../data/ResultTypes';
import { calculate } from '../helper/calculate';

export default function Home() {
	const [month, setMonth] = useState("");
	const [error, setError] = useState({month: false, day: false, year: false});
	const [result, setResult] = useState([]);

	const dayRef = useRef();
	const yearRef = useRef();

	const handleChangeMonth = (event) => {
		setMonth(event.target.value);
	};

	const handleCalculate = () => {
		const day = +dayRef.current.value;
		const year = +yearRef.current.value;

		if(!month || !day || !year){
			return setError({month: !Boolean(month), day: !Boolean(day), year: !Boolean(year)});
		}
		if(day.toString().length > 2 || year.toString().length !== 4){
			return setError({...error, day: Boolean(day.toString().length > 2), year: Boolean(year.toString().length !== 4) });
		}
		const isInvalid = new Date(`${year}-${month}-${day}`);
		if( isNaN(isInvalid) ){
			return setError({month: true, day: true, year: true});
		}

		setError({month: false, day: false, year: false});

		const res = calculate({day, month, year});
		setResult([...res]);
	}

	return (
		<Container maxWidth="xs" sx={{ textAlign: 'center' }}>
			<Grid container spacing={2} justifyContent={"center"}>
				<Grid item xs={12} my={2}>
					<Typography variant='h3' sx={{ fontWeight: "bold" }}>BayDin</Typography>
				</Grid>
				<Grid item xs={12}>
					<Stack direction={"row"} spacing={2} justifyContent={"center"}>
						<FormControl sx={{ m: 1, minWidth: 100 }} size="small" fullWidth>
							<InputLabel id="demo-select-small-label">Month</InputLabel>
							<Select
								value={month}
								label="Month"
								onChange={handleChangeMonth}
								error={error.month}
							>
								{
									Months.map((m, i) => {
										return <MenuItem key={i} value={i+1}>{m}</MenuItem>
									})
								}
							</Select>
						</FormControl>
						<TextField
							size='small'
							label='Day'
							inputRef={dayRef}
							fullWidth
							error={error.day}
						/>
						<TextField
							size='small'
							label='Year'
							inputRef={yearRef}
							error={error.year}
							fullWidth
						/>
					</Stack>
				</Grid>
				<Grid item xs={12}>
					<Box>
						<LoadingButton variant='contained' fullWidth
							onClick={handleCalculate}
						>
							calculate
						</LoadingButton>
					</Box>
				</Grid>
				<Grid item xs={12} textAlign="left" mt={3}>
					<Box className="card">
						<Stack
							spacing={2}
							divider={<Divider orientation="horizontal" flexItem />}
						>
							{
								ResultTypes.map((r, i) => {
									return (
										<Box key={i} sx={{ display: "flex" }}>
											<Typography variant='subtitle1'>{r}:&nbsp;</Typography>
											<Typography sx={{ fontWeight: "bold" }} variant='subtitle1'>{result[i]}</Typography>
										</Box>
									)
								})
							}
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}
