<template>
	<div class="l-content">
		<div class="l-intro">
			<div class="case-intro">
				<CasePreview :cases="loadedCases" classes="one-third"></CasePreview>
			</div>

			<h1 class="title">Let us break your competetion</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si stante, hoc natura videlicet vult,
				salvam esse se, quod concedimus; Itaque ab his ordiamur. Praeterea sublata cognitione et scientia
				tollitur omnis ratio et vitae degendae et rerum gerendarum. Duo Reges: constructio interrete. Est
				enim effectrix multarum et magnarum voluptatum. Quid enim tanto opus est instrumento in optimis
				artibus comparandis?
			</p>

			<AppButton @click.native="$router.push('/portfolio')"></AppButton>
		</div>
	</div>
</template>

<script>
	import CasePreview from '~/components/Portfolio/CasePreview';
	import AppButton from '~/components/UI/AppButton';

	export default {
		components: {
			CasePreview,
			AppButton
		},
		head: {
			bodyAttrs: {
				class: 'is-front'
			}
		},
		data() {
			return {
				loadedCases: [
					{
						id: '1',
						title: 'First Case',
						thumbnail: 'https://images.freecreatives.com/wp-content/uploads/2016/07/Fancy-Mobile-App-p-UI-Mockup.png'
					},
					{
						id: '2',
						title: 'Second Case',
						thumbnail: 'https://designshack.net/wp-content/uploads/Free-Perspective-Website-PSD-Mockup.jpg'
					},
					{
						id: '3',
						title: 'Third Case',
						thumbnail: 'https://s3.envato.com/files/107529224/06.jpg'
					},
					{
						id: '4',
						title: 'Fourth Case',
						thumbnail: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/623544/580/473/m1/fpnw/wm0/03-.jpg?1481229950&s=959e2fd7cd3f55ba62a0f965d182db1d'
					},
					{
						id: '5',
						title: 'Fifth Case',
						thumbnail: 'http://zidimperio.com/wp-content/uploads/mockup-for-web-design-40-free-website-mockup-psd-templates-xdesigns.png'
					},
					{
						id: '6',
						title: 'Sixth Case',
						thumbnail: 'https://mockup.love/wp-content/uploads/edd/2017/12/Responsive-Website-Showcase-Mockup.jpg'
					},
				]
			}
		}
	}
</script>


<style lang="scss" scoped>

	.l-content {

		.l-intro {

			@include media(md) {
				margin-top: -150px;
				background-color: $color-white;
				padding: 40px;
				border-radius: $border-radius-default;
				@include card-1;
				min-height: 500px;
			}

			.case-intro {
				margin-bottom: $gutter;

				@include media(md) {
					margin: -25px;
					margin-bottom: $gutter;
				}

				.cases {
					display: flex;
					flex-flow: row wrap;
				}
			}

			.btn {
				margin-top: $gutter;
			}
		}
	}

</style>
