class Participant {
  constructor({ name, email, attributes }) {
		this.name = name | '';
		this.email = email | '';
		this.attributes = attributes | {};
  }

	setName(name) {
		this.name = name;
		return true; // set successful
	}

	setEmail(email) {
		// todo: check if email is valid
		this.email = email;
		return true; // set successful
	}

	addAttribute(key, attribute) {
		// todo: check if exists
		// todo: check if attribute is valid
		this.attributes[key] = attribute;
		return true;
	}

	getAttribute(key) {
		// todo: check if exists
		return this.attributes[key];
	}

	getAttributes() {
		return Object.keys(this.attributes);
	}

	removeAttribute(key) {
		// todo: check if exists
		delete this.attributes[key];
		return true;
	}

	replaceAttribute(key, attribute) {
		if (removeAttribute(key))
			return addAttribute(attribute);
	}

	serialize() {
		return {
			name: this.name, // string
			email: this.email, // string
			attributes: this.attributes // object
		}
	}
}
