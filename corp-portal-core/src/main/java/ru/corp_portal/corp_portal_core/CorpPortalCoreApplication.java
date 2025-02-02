package ru.corp_portal.corp_portal_core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.context.config.annotation.RefreshScope;

@SpringBootApplication
//@RefreshScope
public class CorpPortalCoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(CorpPortalCoreApplication.class, args);
	}

}
