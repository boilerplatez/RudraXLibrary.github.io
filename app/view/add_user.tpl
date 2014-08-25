{include file="topbar.tpl"}
<div class="container contentWrapper">
	<div class="row">
		<form class="form-horizontal" action="" method="post" name="frm"
			id="inputform" id="frm">
			<fieldset>
				<div class="form-group">
					<label class="col-md-4 control-label" for="name">Blank</label>
					<div class="col-md-5">
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="name">Name</label>
					<div class="col-md-5">
						<input type="text" name="name" value="" class="form-control input" />
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="textarea">Username*</label>
					<div class="col-md-5">
						<input type="text" name="username" value="" required
							formatType="username" class="form-control tag required input" />
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="email">Email</label>
					<div class="col-md-5">
						<input type="text" name="email" value="" formatType="email"
							class="form-control tag input" />
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="gender">Gender</label>
					<div class="col-md-5">
						<select name="gender" class="form-control input">
							<option value="male" selected>Male</option>
							<option value="female">Female</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="address">Address </label>
					<div class="col-md-5">
						<input type="text" name="address" value=""
							class="form-control input" />
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="country">Country</label>
					<div class="col-md-2">
						<select name="country" class="form-control input">
							<option value="aus">Australia</option>
							<option value="india">India</option>
							<option value="usa" selected>USA</option>
						</select>
					</div>
					<label class="col-md-1 control-label" for="zipcode">Zip Code</label>
					<div class="col-md-2">
						<input type="text" name="zipcode" class="form-control tag input"
							formatType="number" />
					</div>
				</div>
				<div class="form-group">
					<div class="col-md-2 col-md-offset-4">
						<input type="submit" class="btn btn-primary" id="save"
							value="Save" /> <input type="reset" class="btn" vaule="Cancel"
							id="reset">
					</div>
					<div class="col-md-3">
						<p class="bg-primary msg-all msg-ok hide">Saved Successfully</p>
						<p class="bg-danger msg-all msg-error hide">Check missing and
							invalid inputs</p>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
</div>
