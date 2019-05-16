################################################################################
# Base dependencies
################################################################################
FROM node:10 AS dependencies

# Setup the project directory
RUN mkdir -p /opt/project
WORKDIR /opt/project

# Setup default command
CMD ["npm", "start"]

# Setup application dependencies
copy package*.json /opt/project/
RUN npm --unsafe-perm install --only production

################################################################################
# Development environment
################################################################################
FROM dependencies AS development

# Setup development dependencies
RUN npm --unsafe-perm install --only development

################################################################################
# Productive environment
################################################################################
FROM dependencies AS production
# Setup the application code
COPY src /opt/project/src
