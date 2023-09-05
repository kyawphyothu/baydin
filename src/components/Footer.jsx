import { Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
	return (
		<div className='footer' style={{ width: "100%", textAlign: "center" }}>
			<Typography variant='caption1'>
				Made with &#128151; by &nbsp;
				<a href='https://kyawphyothu.com' target='_blank' style={{ color: "black", fontWeight: "bolder" }}>
					Kyaw Phyo Thu
				</a>.
			</Typography>
		</div>
	)
}
