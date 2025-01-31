package ru.corp_portal.corp_portal_config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableConfigServer
public class CorpPortalConfigApplication {

	public static void main(String[] args) {
		SpringApplication.run(CorpPortalConfigApplication.class, args);
	}

}
