{include file="topbar.tpl"}
<div class="container contentWrapper">
	<div class="row">
		<form class="form-horizontal" action="" method="post" name="frm"
			id="inputform" id="frm">
			<fieldset>
				<div class="form-group">
					<label class="col-md-4 control-label" for="name">Name</label>
					<div class="col-md-5">
						<input type="text" name="name" formatType="name" value=""
							class="form-control tag input required" />
						<p class="label label-warning missBubble">Enter Name</p>
						<p class="label label-danger errorBubble">Invalid Characters, only
							letters (minimum length 6)</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="textarea">Username</label>
					<div class="col-md-5">
						<input type="text" name="username" value="" formatType="username"
							class="form-control tag required input" />
						<p class="label label-warning missBubble">Enter Username</p>
						<p class="label label-danger errorBubble">Invalid Characters, only
							alphanumeric (eg abc123, minimum length 6)</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="email">Email</label>
					<div class="col-md-5">
						<input type="text" name="email" value="" formatType="email"
							class="form-control tag input required" />
						<p class="label label-warning missBubble">Enter Email</p>
						<p class="label label-danger errorBubble">Invalid Email Address</p>
						<p id=emailExists class="label label-danger hide">Email already exists</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="gender">Gender</label>
					<div class="col-md-2">
						<select name="gender" class="form-control input">
							<option value="male" selected>Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<label class="col-md-1 control-label" for="dob">DOB</label>
					<div class="col-md-2">
						<input type="text" name="dob"
							class="form-control tag input required" formatType="date" />
						<p class="label label-warning missBubble">Enter Date</p>
						<p class="label label-danger errorBubble">Invalid Date format (eg
							22/12/2014)</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-4 control-label" for="address">Address </label>
					<div class="col-md-5">
						<input type="text" name="address" value=""
							class="form-control input required" />
						<p class="label label-warning missBubble">Enter Address</p>
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
						<input type="text" name="zipcode"
							class="form-control tag input required" formatType="number" />
						<p class="label label-warning missBubble">Enter Zip Code</p>
						<p class="label label-danger errorBubble">Invalid Zip Code : Only numbers
							allowed</p>
					</div>
				</div>
				<div class="form-group">
					<div class="col-md-2 col-md-offset-4">
						<input type="button" class="btn btn-primary" id="save"
							value="Save" /> <input type="reset" class="btn" vaule="Cancel"
							id="reset">
					</div>
					<div class="col-md-3">
						<p class="bg-primary msg-all msg-ok hide">Saved Successfully</p>
						<p class="label label-danger msg-all msg-error hide">Check missing and
							invalid inputs</p>
					</div>
				</div>
			</fieldset>
		</form>
	</div>
</div>
