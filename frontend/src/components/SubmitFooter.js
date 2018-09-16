
import React from 'react';
import {Footer, Button} from 'grommet';
import Status from 'grommet/components/icons/Status';
import Spinning from 'grommet/components/icons/Spinning';
import {or, pathOr} from 'ramda';
import styled from 'styled-components';
import {If} from 'react-if';

const FlexedDiv = styled.div`
	display: flex;
	align-items: center;
`;

const StyledSpinning = styled(Spinning)`
	margin-left: 1rem;
`;

const StyledStatus = styled(Status)`
	margin-left: 1rem;
	margin-right: 0.4rem;
`;

export default props => (
	<Footer pad={{vertical: 'medium'}}>
		<FlexedDiv>
			<Button
				label="Save"
				primary
				type={or(props.isSubmitting, props.hasErrors) ? null : 'submit'}
			/>

			{console.log(props)}
			<If condition={props.isSubmitting}>
				<StyledSpinning size="small"/>
			</If>

			<If condition={Boolean(pathOr(false, ['status', 'success'], props))}>
				<FlexedDiv>
					<StyledStatus value="ok"/>
					<div>{props.successText || 'Saved'}</div>
				</FlexedDiv>
			</If>

			<If condition={Boolean(pathOr(false, ['status', 'error'], props))}>
				<FlexedDiv>
					<StyledStatus value="critical"/>
					<div>{props.failText || 'Something went wrong'}</div>
				</FlexedDiv>
			</If>

		</FlexedDiv>
	</Footer>
)
