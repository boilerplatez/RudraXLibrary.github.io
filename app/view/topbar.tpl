<nav role="navigation" class="navbar navbar-default navbar-fixed-top"
	style="height: 35px; min-height: 35px">
	<!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
	<div class="container">
		<div class="container-fluid">
			<div class="navbar-header">
				<div class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li class="{$page->get('homeactive')}"><a
							href="{$smarty.const.CONTEXT_PATH}page/AddUser">Add User</a></li>
						<li class="{$page->get('membersactive')}"><a
							href="{$smarty.const.CONTEXT_PATH}page/UserTable">Users</a>
						</li>
						<li class="{$page->get('actoractive')}"><a
							href="{$smarty.const.CONTEXT_PATH}page/Tab">Tabs Demo</a></li>
					</ul>
				</div>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<form class="navbar-form navbar-left hide" role="search">
					<div class="form-group">
						<input type="text" id="search_input" class="form-control navbar_tag" placeholder="Search">
					</div>
					<button type="button" id="search_button" class="btn btn-default navbar_tag">Submit</button>
				</form>
			</div>
			<!-- /.navbar-collapse -->
		</div>
	</div>
</nav>
<div style="height: 45px"></div>
