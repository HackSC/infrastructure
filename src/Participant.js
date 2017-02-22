class Participant {
  constructor({ name, email, attributes }) {
		this._name = name | '';
		this._email = email | '';
		this._attributes = attributes | {};
  }

	set name(name) {
		this._name = name;
		return true; // set successful
	}

	set email(email) {
		// todo: check if email is valid
		this._email = email;
		return true; // set successful
	}

	set attribute(key, attribute) {
		// todo: check if exists
		// todo: check if attribute is valid
		this.attributes[key] = attribute;
		return true;
	}

	get attribute(key) {
		// todo: check if exists
		return this._attributes[key];
	}

	get attributes() {
		return Object.keys(this._attributes);
	}

	set removeAttribute(key) {
		// todo: check if exists
		delete this._attributes[key];
		return true;
	}

	set replaceAttribute(key, attribute) {
		if (removeAttribute(key))
			return addAttribute(attribute);
	}

	serialize() {
		return {
			name: this._name, // string
			email: this._email, // string
			attributes: this._attributes // object
		}
	}
}
