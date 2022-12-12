---
sidebar_position: 3
description: Assemble objects and classes into larger structures, while still keeping these structures flexible and efficient
---

# Structural Design Patterns

These kinds of patterns explain how we can assemble objects and classes into
larger structures, while still keeping these structures flexible and efficient.

## Adapter

It's a structural design pattern that allows objects with incompatible
interfaces to collaborate.

**Explanation**

Sometimes we have data types that are incompatible with one another, for
example, we could have users purchase activity as `XML` files, we found a
third-party service that is able to give us a recommendation model for the
users but this service uses `JSON` format as the input data.

We use the adapter pattern to create an interface that translates the content
from `XML` to `JSON` objects that can then be used by the
recommendation engine.

Besides transforming from different data formats we can also use it to create
objects with different interfaces to collaborate.

**Structure**

![Adapter UML Diagram](./images/adapter.png)

- **Client**: This is a class that contains the business logic of the program.
- **Client Interface**: Describes the protocol that the other classes need to
  follow to interact with the client code.
- **Service**: This is the class that requires the data to be transformed,
  the `Client` can use the service directly because of the compatibility.
- **Adapter**: Is the class that can work with both the client and the service,
  and implements the `Client Interface` while wrapping the service object. The
  adapter receives calls from the client via the adapter interface and translates
  those requests to the service in a format that it can understand.

**Code**

```java
class Client {
	public static void main(String[] args) {
		String xmlFilePath = args[0];
		XML data = magicMethod(xmlFilePath);

		DataAdapter adapter = new DataAdapter();
		JSON json = adapter.transform(data);

		JsonService.serviceMethod(json)
	}
}

class DataAdapter implements DataTransformation {
	public JSON transform(XML xml) {
		JSON json = new JSON();
		// Magic happens
		json.data = xml.data;
		return json;
	}
}

interface DataTransformation {
	JSON transform(XML xml)
}

class XML {}

class JsonService {
	public static void serviceMethod(JSON json)
}

class JSON {}
```

**When to use**

- When you have an existing class but this class isn't compatible with the
  rest of the codebase.
- When you want to reuse existing subclasses that lack common functionality
  that can be abstracted into a superclass.
