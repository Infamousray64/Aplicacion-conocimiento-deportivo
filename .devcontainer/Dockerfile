FROM node:20

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Install webpack (might not be needed)
RUN npm install --global webpack@5.84.1

# Ensure default `node` user has access to `sudo`
ARG USERNAME=node
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
