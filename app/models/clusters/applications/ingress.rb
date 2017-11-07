module Clusters
  module Applications
    class Ingress < ActiveRecord::Base
      self.table_name = 'clusters_applications_ingress'

      include ::Clusters::Concerns::ApplicationStatus

      belongs_to :cluster, class_name: 'Clusters::Cluster', foreign_key: :cluster_id

      validates :cluster, presence: true

      default_value_for :ingress_type, :nginx
      default_value_for :version, :nginx

      after_initialize :set_initial_status

      enum ingress_type: {
        nginx: 1
      }

      def self.application_name
        self.to_s.demodulize.underscore
      end

      def set_initial_status
        self.status = 'installable' if cluster&.application_helm_installed?
      end

      def name
        self.class.application_name
      end

      def chart
        'stable/nginx-ingress'
      end
    end
  end
end
