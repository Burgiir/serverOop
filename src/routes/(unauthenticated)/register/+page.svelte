<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>
<div class="log">
  <form use:enhance method="POST" action="?/register">
    <input type="text" name="username" class="question" id="nme" required autocomplete="off"/>
    <label for="nme"><span>What should i call you?</span></label>

    <input type="password" name="password" class="question" id="name" required autocomplete="off"/>
    <label for="name"><span>What password do you want?</span></label>

    <button class="button-57" ><span class="text">Done?</span><span>register</span></button>
    {#if form?.error}
      {form?.error}
    {/if}
  </form>
</div>


<style>
	div{
		display: flex;
		flex-direction: row;
		margin: 100px;
		margin-top: 150px;
	}

	input,
	span,
	label {
	font-family: 'Ubuntu', sans-serif;
	display: block;
	margin: 10px;
	padding: 5px;
	border: none;
	font-size: 22px;
	}

	/* Question */

	input.question {
	font-size: 45px;
	font-weight: 300;
	border-radius: 2px;
	margin: 0;
	border: none;
	width: 80%;
	background: rgba(0, 0, 0, 0);
	transition: padding-top 0.2s ease, margin-top 0.2s ease;
	overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
	}
	/* Underline and Placeholder */

	input.question + label {
	display: block;
	position: relative;
	white-space: nowrap;
	padding: 0;
	margin: 0;
	width: 10%;
	border-top: 1px solid red;
	-webkit-transition: width 0.4s ease;
	transition: width 0.4s ease;
	height: 0px;
	}

	input.question:focus + label {
	width: 80%;
	}

	input.question:focus,
	input.question:valid {
	padding-top: 35px;
	}


	input.question:focus + label > span,
	input.question:valid + label > span {
	top: -100px;
	font-size: 22px;
	color: #333;
	}


	input.question:valid + label {
	border-color: green;
	}

	input.question:invalid {
	box-shadow: none;
	}

	input.question + label > span {
	font-weight: 300;
	margin: 0;
	position: absolute;
	color: #8F8F8F;
	font-size: 48px;
	top: -66px;
	left: 0px;
	z-index: -1;
	-webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
	transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
	}

	@-webkit-keyframes appear {
	100% {
		opacity: 1;
	}
	}

	@keyframes appear {
	100% {
		opacity: 1;
	}
	}

	.button-57 {
	margin-top: 20px;
	position: relative;
	overflow: hidden;
	border: 1px solid #18181a;
	color: #18181a;
	display: inline-block;
	font-size: 15px;
	line-height: 15px;
	padding: 18px 18px 17px;
	text-decoration: none;
	cursor: pointer;
	background: #fff;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	}

	.button-57 span:first-child {
	position: relative;
	transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
	z-index: 10;
	}

	.button-57 span:last-child {
	color: white;
	display: block;
	position: absolute;
	bottom: 0;
	transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
	z-index: 100;
	opacity: 0;
	top: 52%;
	left: 42%;
	transform: translateY(225%) translateX(-50%);
	height: 14px;
	line-height: 13px;
	}

	.button-57:after {
	content: "";
	position: absolute;
	bottom: -50%;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	transform-origin: bottom center;
	transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
	transform: skewY(9.3deg) scaleY(0);
	z-index: 50;
	}

	.button-57:hover:after {
	transform-origin: bottom center;
	transform: skewY(9.3deg) scaleY(2);
	}

	.button-57:hover span:last-child {
	transform: translateX(-50%) translateY(-100%);
	opacity: 1;
	transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
	}

</style>