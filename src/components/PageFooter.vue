<script>
export default {
	data() {
		return {
			title: "Boolando s.r.l",
			policy_one: "Informazioni legali ",
			policy_two: "Informativa privacy ",
			policy_three: "Diritto di recesso ",
		};
	},
};
</script>

<template>
	<footer class="page-footer">
		<div class="container">
			<div class="row">
				<div class="col">
					<h4>{{ title }}</h4>
					<ul class="footer-policy">
						<li>
							<a href="#">{{ policy_one }}</a>
						</li>
						<li>
							<a href="#">{{ policy_two }}</a>
						</li>
						<li>
							<a href="#">{{ policy_three }}</a>
						</li>
					</ul>
				</div>
				<div class="col social">
					<h5>Trovaci anche su</h5>
                    <ul>
                        <li>s</li>
                        <li>s</li>
                        <li>s</li>
                        <li>s</li>
                        <li>s</li>
                    </ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.page-footer {
    background-color: #1A1A1A;
    color: white;

    .row {
       display: flex;
    }
}


.col {
	flex-basis: 0;
	flex-grow: 1;

    &.social {
        display: flex;
        justify-content: flex-end;
       

        
    }
}
</style>
