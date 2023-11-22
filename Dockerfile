FROM node:16.14-alpine
LABEL MAINTAINER="VdMtl" 

# Create app directory
RUN mkdir -p /usr/src/lib && chown -R node:node /usr

WORKDIR /usr/src/lib

# Install all dependencies
COPY --chown=node:node . /usr/src/lib

# Install deps
RUN npm ci --ignore-scripts

# Build library
RUN npm run build-storybook 

# Publish the library
CMD ["npm", "publish", "dist/angular-ui", "--tag", "latest", "--unsafe-perm"]
