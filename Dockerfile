FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
ENV NEXT_PUBLIC_DATAAPI_URL=${NEXT_PUBLIC_DATAAPI_URL}
ARG NEXT_PUBLIC_DATAAPI_URL=${NEXT_PUBLIC_DATAAPI_URL}
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start
