# Build
FROM node:latest as builder
LABEL maintainer="Joshua Bird (josh.bird@cos.io)"

COPY . .
RUN yarn
RUN yarn build

# Deployment
FROM nginx:latest
LABEL maintainer="Joshua Bird (josh.bird@cos.io)"

COPY --from=builder dist /srv/share-analytics
COPY nginx.conf /etc/nginx/nginx.conf
COPY share-analytics.conf /etc/nginx/sites-enabled/share-analytics.conf
